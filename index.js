function loadBooks(selectedGenre) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const title = book.file.replace(".pdf", "");
    const coverImage = `${coverFolder}${title}.png`;

    const img = new Image();
    img.src = coverImage;
    img.onerror = () => {
      img.onerror = () => {
        img.src = `${coverFolder}${defaultCover}`;
      };
    };

    if (selectedGenre === "all" || book.genre === selectedGenre) {
      const col = document.createElement("div");
      col.className = "col-xl-2 col-lg-3 col-md-4 col-6 mb-4";
      col.innerHTML = `
                <div class="card">
                    <img src="${coverImage}" class="card-img-top" alt="${title}" onerror="this.onerror=null; this.src='${coverFolder}${defaultCover}'">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <a href="${pdfFolder}${book.file}" class="btn btn-primary">Read</a>
                    </div>
                </div>
            `;
      bookList.appendChild(col);
    }
  });
}

document.getElementById("genre-select").addEventListener("change", (event) => {
  loadBooks(event.target.value);
});

loadBooks("all");
