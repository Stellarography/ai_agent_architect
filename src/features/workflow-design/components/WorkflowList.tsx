import React, { useState } from 'react';
import { 
  useGetWorkflowsQuery,
  useDeleteWorkflowMutation,
  useAddWorkflowMutation,
  useUpdateWorkflowMutation,
  Workflow
} from '../services/workflowApiSlice';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

const WorkflowList: React.FC = () => {
  const { data: workflows, isLoading, isError } = useGetWorkflowsQuery();
  const [deleteWorkflow] = useDeleteWorkflowMutation();
  const [addWorkflow] = useAddWorkflowMutation();
  const [updateWorkflow] = useUpdateWorkflowMutation();
  const { toast } = useToast();
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingWorkflow, setEditingWorkflow] = useState<Workflow | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'draft' as const
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingWorkflow) {
        await updateWorkflow({ 
          id: editingWorkflow.id, 
          ...formData 
        }).unwrap();
        toast({ title: "Workflow updated successfully" });
      } else {
        await addWorkflow({
          ...formData,
          nodes: [],
          edges: []
        }).unwrap();
        toast({ title: "Workflow created successfully" });
      }
      setIsAddDialogOpen(false);
      setEditingWorkflow(null);
      setFormData({ name: '', description: '', status: 'draft' });
    } catch (error) {
      toast({ 
        title: "Error",
        description: "Failed to save workflow",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteWorkflow(id).unwrap();
      toast({ title: "Workflow deleted successfully" });
    } catch (error) {
      toast({ 
        title: "Error",
        description: "Failed to delete workflow",
        variant: "destructive"
      });
    }
  };

  const handleEdit = (workflow: Workflow) => {
    setEditingWorkflow(workflow);
    setFormData({
      name: workflow.name,
      description: workflow.description || '',
      status: workflow.status
    });
    setIsAddDialogOpen(true);
  };

  if (isLoading) return <div className="p-4">Loading workflows...</div>;
  if (isError) return <div className="p-4 text-red-500">Error loading workflows</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Workflows</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => {
              setEditingWorkflow(null);
              setFormData({ name: '', description: '', status: 'draft' });
            }}>
              Create Workflow
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingWorkflow ? 'Edit Workflow' : 'Create New Workflow'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={e => setFormData(prev => ({ ...prev, status: e.target.value as Workflow['status'] }))}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingWorkflow ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflows?.map((workflow) => (
          <Card key={workflow.id}>
            <CardHeader>
              <CardTitle>{workflow.name}</CardTitle>
              {workflow.description && (
                <CardDescription>{workflow.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  workflow.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  workflow.status === 'draft' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }`}>
                  {workflow.status}
                </span>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(workflow)}>
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(workflow.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkflowList;