# Kill any running Node processes
taskkill /F /IM node.exe 2>$null

# Force remove problematic files first
$problematicFiles = @(
    ".\node_modules\@esbuild\win32-x64\esbuild.exe",
    ".\node_modules\@rollup\rollup-win32-x64-msvc\rollup.win32-x64-msvc.node",
    ".\node_modules\@tailwindcss\oxide-win32-x64-msvc\tailwindcss-oxide.win32-x64-msvc.node"
)

foreach ($file in $problematicFiles) {
    if (Test-Path $file) {
        Remove-Item -Path $file -Force -ErrorAction SilentlyContinue
    }
}

# Remove node_modules directory
if (Test-Path ".\node_modules") {
    Remove-Item -Path ".\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
}

# Clean yarn cache
yarn cache clean --force
