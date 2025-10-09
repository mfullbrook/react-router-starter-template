// Simple useUser hook for React Router 7
// This is a placeholder implementation - you may need to integrate with your authentication system

export const useUser = () => {
  // For now, return unauthenticated state
  // You can integrate with your authentication system here
  const user = null;
  const isAuthenticated = false;

  // Generate initials from user's name
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2); // Limit to 2 characters
  };

  return {
    user,
    isAuthenticated,
    initials: user ? getInitials((user as any).name) : '',
  };
};
