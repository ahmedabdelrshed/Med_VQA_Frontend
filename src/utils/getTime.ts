const formatEgyptTime = () => {
    const utcDate = new Date();

    const egyptDate = new Date(utcDate.getTime() + 2 * 60 * 60 * 1000);

    return egyptDate.toISOString().slice(0, 19).replace("T", " ");
};

export default formatEgyptTime;

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    // Format options
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Cairo",
    };
    return date.toLocaleString("en-US", options);
  };
