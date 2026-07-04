document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("company-name").textContent = config.company.name;

    document.getElementById("company-slogan").textContent = config.company.slogan;

    const container = document.getElementById("catalog-list");

    config.catalogs.forEach(catalog => {

        container.innerHTML += `
            <div class="catalog">

                <h2>${catalog.title}</h2>

                <button>Abrir</button>

            </div>
        `;

    });

});