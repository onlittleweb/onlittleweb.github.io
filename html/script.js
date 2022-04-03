        function ouvrirPage() {
            var a = document.getElementById("search").value;

            if (a === "categories") {
                window.open("html/categories.html");
            }

            if (a === "forest") {
                window.open("html/categories/forest.html");
            }

            if (a === "youtube") {
                window.open("https://www.youtube.com/");
            }


        }