const formatEgyptTime = () => {
    const utcDate = new Date();

    const egyptDate = new Date(utcDate.getTime() + 2 * 60 * 60 * 1000);

    return egyptDate.toISOString().slice(0, 19).replace("T", " ");
};

export default formatEgyptTime;
