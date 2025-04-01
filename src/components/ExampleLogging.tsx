import React, { useEffect } from 'react';
import logger from '../utils/logger';

export const ExampleLogging: React.FC = () => {
  useEffect(() => {
    // Different types of logging
    logger.info('User visited the page', { page: 'home', timestamp: new Date() });
    logger.warn('API response slower than usual', { responseTime: '2.5s' });
    logger.error('Failed to fetch data', { 
      error: new Error('Network timeout'),
      endpoint: '/api/data' 
    });
    logger.debug('Debug information', { state: 'initialized' });
  }, []);

  const handleClick = () => {
    try {
      throw new Error('Example error');
    } catch (error) {
      logger.error('Button click failed', { error });
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Test Error Logging</button>
    </div>
  );
};
