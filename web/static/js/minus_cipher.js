function RemoveSelect() {
    let minus = document.getElementById('-');
    if (minus.disabled) {
        return
    }
    const orphan = document.getElementById(`alg-${numOfSelects}-wrapper`);
    document.getElementById("cipher-form").removeChild(orphan);
    numOfSelects--;

    if (numOfSelects === 1) {
        minus.disabled = true;
    }
}