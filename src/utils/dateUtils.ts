import { format } from 'date-fns';

// Helper function to handle both string and Date types
function toDate(dateInput: string | Date): Date {
  return typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
}

export function formatDate(dateString: string | Date) {
  const date = toDate(dateString); // Convert to Date if it's a string
  return format(date, 'MMM d, yyyy');
}

export function formatDateTime(dateString: string | Date) {
  const date = toDate(dateString); // Convert to Date if it's a string
  return format(date, 'MMM d, yyyy h:mm a');
}

export function timeAgo(dateString: string | Date) {
  const date = toDate(dateString); // Convert to Date if it's a string
  
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  if (seconds < 0) {
    return 'In the future';
  }

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval} year${interval === 1 ? '' : 's'} ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval === 1 ? '' : 's'} ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval === 1 ? '' : 's'} ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval === 1 ? '' : 's'} ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute${interval === 1 ? '' : 's'} ago`;

  return `${Math.floor(seconds)} second${seconds === 1 ? '' : 's'} ago`;
}
