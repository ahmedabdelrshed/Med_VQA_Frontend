export const openModel = (model: string) => {
    const modal = document.getElementById(model) as HTMLDialogElement | null;
    modal?.showModal();
}