const products = [
  {
    category: "men's_jacket",
    code: "001",
    name: "Nord Jacket",
    quantity: 10,
    size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prices: {
      Fashion: 950,
      Tagaer: 980,
      KOS: 970
    }
  },
  {
    category: "men's_jacket",
    code: "002",
    name: "Arctic Jacket",
    quantity: 15,
    size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prices: {
      Fashion: 900,
      Tagaer: 930,
      KOS: 920
    }
  },
  {
    category: "men's_jacket",
    code: "003",
    name: "Storm Jacket",
    quantity: 13,
    size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prices: {
      Fashion: 1500,
      Tagaer: 1800,
      KOS: 1700
    }
  },
  { 
    category: "women's_jacket",
    code: "004",
    name: "Lyra Jacket",
    quantity: 19,
    size: ["XS", "S", "M", "L", "XL"],
    prices: {
      Fashion: 1300,
      Tagaer: 1450,
      KOS: 1400
    }
  },
  { 
    category: "women's_jacket",
    code: "005",
    name: "Selena Jacket",
    quantity: 20,
    size: ["XS", "S", "M", "L", "XL"],
    prices: {
      Fashion: 1150,
      Tagaer: 1250,
      KOS: 1240
    }
  },
  { 
    category: "women's_jacket",
    code: "006",
    name: "Adele Jacket",
    quantity: 5,
    size: ["XS", "S", "M", "L", "XL"],
    prices: {
      Fashion: 980,
      Tagaer: 1030,
      KOS: 1000
    }
  },
  {
    category: "children's_jacket",
    code: "007",
    name: "Snowflake Jacket",
    quantity: 13,
    size: ["1 year", "1,5 years", "3 years", "4-5 years"],
    prices: {
      Fashion: 700,
      Tagaer: 720,
      KOS: 740
    }
  },
  {
    category: "children's_jacket",
    code: "008",
    name: "Pixie Jacket",
    quantity: 20,
    size: ["1 year", "1,5 years", "3 years", "4-5 years"],
    prices: {
      Fashion: 890,
      Tagaer: 950,
      KOS: 900
    }
  },
  {
    category: "children's_jacket",
    code: "009",
    name: "Teddy Jacket",
    quantity: 8,
    size: ["1 year", "1,5 years", "3 years", "4-5 years"],
    prices: {
      Fashion: 550,
      Tagaer: 590,
      KOS: 570
    }
  }
];

const clientSelect = document.getElementById("client");
const catalogSelect = document.getElementById("catalog");
const tbody = document.querySelector("#productTable tbody");



function renderTable() {
  const client = clientSelect.value;
  const category = catalogSelect.value;

  tbody.innerHTML = ""; // очищаем таблицу перед добавлением новых строк

  const filtered = products.filter(p => p.category === category);

  filtered.forEach(product => {
    const row = document.createElement("tr");//создание новой строки таблицы
    row.innerHTML = `
      <td>${product.code}</td>
      <td>${product.name}</td>
      <td>${product.size.join(", ")}</td> 
      <td>${product.quantity}</td>
      <td>${product.prices[client]} lei</td>
    `;
    tbody.appendChild(row); //Добавляет готовую строку в таблицу (<tbody>).
  });
}

// обработчики событий селектора клиента и каталога
clientSelect.addEventListener("change", renderTable);
catalogSelect.addEventListener("change", renderTable);

// вызов функции 
renderTable();