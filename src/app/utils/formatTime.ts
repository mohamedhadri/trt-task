import { formatDistanceToNow } from 'date-fns';

export const formatRelativeTime = (dateString:any) => {
  const date = new Date(dateString);
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });
  return relativeTime;
};

export { formatDistanceToNow };
