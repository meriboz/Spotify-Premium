
    const visaRadio = document.getElementById("visaCard");
    const paparaRadio = document.getElementById("paparaCard");
    const garantiRadio = document.getElementById("garantiCard");
    const cardLogo = document.getElementById("cardLogo");
    

    const krediCardBox = document.getElementById("krediCardBox");

    function updateCardBackground(cardType) {
        krediCardBox.classList.remove("visa-bg", "papara-bg", "garanti-bg");

        if (cardType === "visa") {
            krediCardBox.classList.add("visa-bg");
        } else if (cardType === "papara") {
            krediCardBox.classList.add("papara-bg");
        } else if (cardType === "garanti") {
            krediCardBox.classList.add("garanti-bg");
        }
    }

    document.querySelectorAll('input[name="card"]').forEach(radio => {
        radio.addEventListener('change', () => {
            if (paparaRadio.checked) {
                updateCardBackground("papara");
            } else if (visaRadio.checked) {
                updateCardBackground("visa");
            } else if (garantiRadio.checked) {
                updateCardBackground("garanti");
            }
        });
    });



    
  // Kart numarası
  document.getElementById("cardNumberInput").addEventListener("input", function () {
        document.getElementById("cardNumberDisplay").value = this.value;
    });

   // Son kullanma tarihi
    document.getElementById("expiryInput").addEventListener("input", function () {
        document.getElementById("expiryDisplay").value = this.value;
    });

    // CVV
     document.getElementById("cvvInput").addEventListener("input", function () {
        document.getElementById("cvvDisplay").value = this.value;
});



  function changeText(cardName) {
    localStorage.setItem("selectedPlan", cardName);
    window.location.href = "buypage.html"; // Satın alma sayfasına yönlendir
  }



// Plan değişimini sağlayacak fonksiyon
function changeContent(planName) {
    // Seçilen planı localStorage'a kaydet
    localStorage.setItem("selectedPlan", planName);

    // Plan detayları
    const planDetails = {
        "Bireysel": {
            desc: [
                "1 Premium hesabı",
                "3 ay boyunca ₺59,99",
                "İstediğin zaman çevrimiçi iptal et."
            ],
            total: "₺59,99",
            img: "images/Birseysel.png"
        },
        "Öğrenci": {
            desc: [
                "Doğrulanmış 1 Premium hesabı",
                "Koşulları sağlayan öğrenciler için indirim",
                "İstediğin zaman iptal et"
            ],
            total: "₺32,99",
            img: "images/Birseysel.png"
        },
        "Duo": {
            desc: [
                "2 Premium hesap",
                "İstediğin zaman iptal et"
            ],
            total: "₺79,99",
            img: "images/duo.png"
        },
        "Aile": {
            desc: [
                "6 Premium hesabı",
                "Sansürsüz içerikleri kontrol et",
                "İstediğin zaman iptal"
            ],
            total: "₺99,99",
            img: "images/aile.png"
        }
    };

    // Seçilen planı al
    const plan = planDetails[planName];
    if (plan) {
        // Plan adını güncelle
        document.getElementById("selectedText").textContent = planName;

        // Görseli güncelle
        const imgElement = document.querySelector(".premium-logo img");
        if (imgElement) imgElement.src = plan.img;

        // Açıklamaları güncelle
        const paragraphs = document.querySelectorAll(".total-content p");
        const caretParagraphs = Array.from(paragraphs).filter(p =>
            p.querySelector("i.fa-caret-right")
        );
        caretParagraphs.forEach((p, i) => {
            if (plan.desc[i]) {
                p.innerHTML = `<i class="fa-solid fa-caret-right"></i> ${plan.desc[i]}`;
            } else {
                p.remove(); // Fazlalıkları sil
            }
        });

        // Fiyatı güncelle
        const totalPrice = document.querySelector(".total p:last-child");
        if (totalPrice) totalPrice.textContent = plan.total;
    }
}


window.onload = function () {
  const selectedPlan = localStorage.getItem("selectedPlan") || "Bireysel";
  changeContent(selectedPlan);
};

