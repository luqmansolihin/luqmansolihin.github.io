document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan elemen form
    var form = document.querySelector("form");

    // Tambahkan event listener untuk event submit pada form
    form.addEventListener("submit", function (event) {
        // Hentikan perilaku default dari event submit
        event.preventDefault();

        // Tambahkan kelas 'hidden' pada elemen dengan kelas 'input'
        var inputSection = document.querySelector(".input");
        inputSection.classList.add("hidden");

        // Hapus kelas 'hidden' dari elemen dengan kelas 'output'
        var outputSection = document.querySelector(".output");
        outputSection.classList.remove("hidden");

        // Dapatkan nilai input beratBadan
        var beratBadan = parseFloat(
            document.getElementById("beratBadan").value
        );

        // Dapatkan nilai input tinggiBadan
        var tinggiBadan = parseFloat(
            document.getElementById("tinggiBadan").value
        );

        var BMI = beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));

        function updateResultContent(heading, subheading, paragraph) {
            var resultHeading = document.querySelector(".card.result h3");
            resultHeading.textContent = heading;

            var resultSubheading = document.querySelector(".card.result h2");
            resultSubheading.textContent = subheading;

            var resultParagraph = document.querySelector(".card.result p");
            resultParagraph.textContent = paragraph;
        }

        function updateCategoryBMI(categoryBMI) {
            var resultCategoryBMI = document.querySelector(".category-bmi");
            resultCategoryBMI.innerHTML = categoryBMI;
        }

        function updateResultEffect(heading, paragraph) {
            var resultHeading = document.querySelector(
                ".card.result-effect h3"
            );
            resultHeading.textContent = heading;

            var resultParagraph = document.querySelector(
                ".card.result-effect p"
            );
            resultParagraph.innerHTML = paragraph;
        }

        BMI = BMI.toFixed(2);

        if (BMI < 18.5) {
            updateResultContent(
                "Berat Badan Kurang",
                BMI,
                "Anda mengalami kekurangan berat badan"
            );

            updateCategoryBMI(
                "Hasil BMI kurang dari 18.5 <br>" +
                    "Anda berada dalam kategori kekurangan berat badan. <br>" +
                    "Cara terbaik untuk menaikkan berat badan diantaranya Konsumsi Makanan yang Kaya Nutrisi, Makanan Berkalori Tinggi, Jangan Melewatkan Sarapan. <br>" +
                    "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal."
            );

            updateResultEffect(
                "Beberapa penyakit yang berasal dari kekurangan berat badan",
                "Kekurangan Nutrisi <br>" +
                    "Penurunan Imunitas <br>" +
                    "Kehilangan Otot <br>" +
                    "Gangguan Reproduksi"
            );
        }

        if (BMI >= 18.5 && BMI < 25) {
            updateResultContent(
                "Berat Badan Normal",
                BMI,
                "Anda memiliki berat badan normal"
            );

            updateCategoryBMI(
                "Hasil BMI diantara 18.5 dan 24.9 <br>" +
                    "Anda berada dalam kategori berat badan normal. <br>" +
                    "Cara terbaik untuk menjaga berat badan diantaranya Makan Seimbang, Porsi Terkendali, Olahraga Secara Teratur. <br>" +
                    "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menjaga berat badan tetap normal."
            );

            updateResultEffect(
                "Beberapa keuntungan berat badan normal",
                "Kesehatan Jantung Lebih Baik <br>" +
                    "Meningkatkan Kesehatan Metabolik <br>" +
                    "Memperpanjang Umur <br>" +
                    "Meningkatkan Kualitas Hidup Secara Keseluruhan"
            );
        }

        if (BMI >= 25 && BMI < 30) {
            updateResultContent(
                "Berat Badan Lebih",
                BMI,
                "Anda memiliki berat badan berlebih"
            );

            updateCategoryBMI(
                "Hasil BMI diantara 25 dan 29.9 <br>" +
                    "Anda berada dalam kategori berat badan berlebih. <br>" +
                    "Cara terbaik untuk menurukan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br>" +
                    "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
            );

            updateResultEffect(
                "Beberapa penyakit yang berasal dari berat badan berlebih",
                "Jantung <br>" +
                    "Diabetes <br>" +
                    "Sleep Apnea <br>" +
                    "Kanker"
            );
        }

        if (BMI >= 30.0) {
            updateResultContent(
                "Obesitas",
                BMI,
                "Anda mengalami obesitas(kegemukan)"
            );

            updateCategoryBMI(
                "Hasil BMI lebih dari 30 <br>" +
                    "Anda berada dalam kategori obesitas(kegemukan). <br>" +
                    "Cara terbaik untuk menurukan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br>" +
                    "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
            );

            updateResultEffect(
                "Beberapa penyakit yang berasal dari obesitas(kegemukan)",
                "Jantung <br>" +
                    "Diabetes <br>" +
                    "Sleep Apnea <br>" +
                    "Kanker"
            );
        }
    });

    // Dapatkan tombol dengan kelas '.info.reset'
    var resetButton = document.querySelector(".info.reset");

    // Tambahkan event listener untuk event klik pada tombol reset
    resetButton.addEventListener("click", function (event) {
        // Tambahkan kelas 'hidden' pada elemen dengan kelas 'output'
        var outputSection = document.querySelector(".output");
        outputSection.classList.add("hidden");

        // Hapus kelas 'hidden' dari elemen dengan kelas 'input'
        var inputSection = document.querySelector(".input");
        inputSection.classList.remove("hidden");

        // Reset nilai-nilai input form
        form.reset();
    });
});
