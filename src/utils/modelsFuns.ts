export const openModel = (model: string) => {
    const modal = document.getElementById(model) as HTMLDialogElement | null;
    modal?.showModal();
}

export const closeModel = (model: string) => {
    const modal = document.getElementById(model) as HTMLDialogElement | null;
    modal?.close();
}