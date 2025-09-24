import React from 'react';

interface LoadingSkeletonProps {
  variant: 'carousel' | 'service-card' | 'image' | 'text';
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ variant, className = '' }) => {
  switch (variant) {
    case 'carousel':
      return (
        <div className={`loading-skeleton loading-skeleton--carousel ${className}`}>
          <div className="loading-skeleton__image"></div>
          <div className="loading-skeleton__indicators">
            <div className="loading-skeleton__dot"></div>
            <div className="loading-skeleton__dot"></div>
            <div className="loading-skeleton__dot"></div>
          </div>
        </div>
      );

    case 'service-card':
      return (
        <div className={`loading-skeleton loading-skeleton--service-card ${className}`}>
          <div className="loading-skeleton__image"></div>
          <div className="loading-skeleton__content">
            <div className="loading-skeleton__icon"></div>
            <div className="loading-skeleton__title"></div>
            <div className="loading-skeleton__list">
              <div className="loading-skeleton__list-item"></div>
              <div className="loading-skeleton__list-item"></div>
              <div className="loading-skeleton__list-item"></div>
              <div className="loading-skeleton__list-item"></div>
            </div>
          </div>
        </div>
      );

    case 'image':
      return (
        <div className={`loading-skeleton loading-skeleton--image ${className}`}></div>
      );

    case 'text':
      return (
        <div className={`loading-skeleton loading-skeleton--text ${className}`}></div>
      );

    default:
      return null;
  }
};

export default LoadingSkeleton;