export function renderPagination(elements, pagination){

    elements.forEach(page => {

        page.textContent = `
            Page ${pagination.page} of ${pagination.totalPages}
        `;
    });

    window.scrollTo({
        top: 200,
        behavior: 'smooth'
    });
}