document.addEventListener("DOMContentLoaded", function () {
  // function for the Data Type functionality
  const categorialDataButton = document.getElementById(
    "categorial-data-button"
  );
  const numericalDataButton = document.getElementById("numerical-data-button");
  const categorialDataButtons = document.getElementById(
    "categorial-data-buttons"
  );
  const numericalDataButtons = document.getElementById(
    "numerical-data-buttons"

  
  );


  const dataSubType = document.getElementById("data-subtype");
  const inputContainer = document.getElementById("input-container");
  const inputTable = document.getElementById("inputTable");
  const calculationOptions = document.getElementById("calculation-options");
  
  // Variable to track selected data subtype
  let selectedDataType = '';

  categorialDataButton.addEventListener("click", function () {
    if (!categorialDataButtons.classList.contains("hidden")) {
      dataSubType.classList.add("hidden");
    } else {
      dataSubType.classList.remove("hidden");
    }
    if (!numericalDataButtons.classList.contains("hidden")) {
      numericalDataButtons.classList.add("hidden");
    }
    categorialDataButtons.classList.toggle("hidden");
    // Hide input container, table, and calculation options when switching data types
    inputContainer.classList.add("hidden");
    inputTable.classList.add("hidden");
    calculationOptions.classList.add("hidden");
  });

  numericalDataButton.addEventListener("click", function () {
    if (!numericalDataButtons.classList.contains("hidden")) {
      dataSubType.classList.add("hidden");
    } else {
      dataSubType.classList.remove("hidden");
    }
    if (!categorialDataButtons.classList.contains("hidden")) {
      categorialDataButtons.classList.add("hidden");
    }
    numericalDataButtons.classList.toggle("hidden");
    // Hide input container, table, and calculation options when switching data types
    inputContainer.classList.add("hidden");
    inputTable.classList.add("hidden");
    calculationOptions.classList.add("hidden");
  });

  // function for the subData Type functionality
  const nominalDataButton = document.getElementById("nominal-data-button");
  const ordinalDataButton = document.getElementById("ordinal-data-button");
  const discreteDataButton = document.getElementById("discrete-data-button");
  const continuousDataButton = document.getElementById(
    "continuous-data-button"
  );

  const nominalDataOptions = document.getElementById("nominal-data-options");
  const ordinalDataOptions = document.getElementById("ordinal-data-options");
  const numericalDataOptions = document.getElementById(
    "numerical-data-options"
  );

  nominalDataButton.addEventListener("click", function () {
    selectedDataType = 'nominal';
    if (!nominalDataOptions.classList.contains("hidden")) {
      calculationOptions.classList.add("hidden");
    } else {
      calculationOptions.classList.remove("hidden");
    }
    if (!ordinalDataOptions.classList.contains("hidden")) {
      ordinalDataOptions.classList.add("hidden");
    }
    if (!numericalDataOptions.classList.contains("hidden")) {
      numericalDataOptions.classList.add("hidden");
    }
    nominalDataOptions.classList.toggle("hidden");
    // Show calculation options and input data, hide table
    calculationOptions.classList.remove("hidden");
    inputContainer.classList.remove("hidden");
    inputTable.classList.add("hidden");
  });

  ordinalDataButton.addEventListener("click", function () {
    selectedDataType = 'ordinal';
    if (!ordinalDataOptions.classList.contains("hidden")) {
      calculationOptions.classList.add("hidden");
    } else {
      calculationOptions.classList.remove("hidden");
    }
    if (!nominalDataOptions.classList.contains("hidden")) {
      nominalDataOptions.classList.add("hidden");
    }
    if (!numericalDataOptions.classList.contains("hidden")) {
      numericalDataOptions.classList.add("hidden");
    }
    ordinalDataOptions.classList.toggle("hidden");
    // Show calculation options and input data, hide table
    calculationOptions.classList.remove("hidden");
    inputContainer.classList.remove("hidden");
    inputTable.classList.add("hidden");
  });

  function numericalDataOptionsToggle() {
    if (!numericalDataOptions.classList.contains("hidden")) {
      calculationOptions.classList.add("hidden");
    } else {
      calculationOptions.classList.remove("hidden");
    }
    if (!nominalDataOptions.classList.contains("hidden")) {
      nominalDataOptions.classList.add("hidden");
    }
    if (!ordinalDataOptions.classList.contains("hidden")) {
      ordinalDataOptions.classList.add("hidden");
    }
    numericalDataOptions.classList.toggle("hidden");
  }

  discreteDataButton.addEventListener("click", function() {
    selectedDataType = 'discrete';
    numericalDataOptionsToggle();
    // Show calculation options and input data, hide table
    calculationOptions.classList.remove("hidden");
    inputContainer.classList.remove("hidden");
    inputTable.classList.add("hidden");
  });
  
  continuousDataButton.addEventListener("click", function() {
    selectedDataType = 'continuous';
    numericalDataOptionsToggle();
    // Show calculation options and input data, hide table
    calculationOptions.classList.remove("hidden");
    inputContainer.classList.remove("hidden");
    inputTable.classList.add("hidden");
  });

  // functions for generating the table
  const rowcount = document.getElementById("rowcount");
  const generateButton = document.getElementById("generate-button");
  const calculateButton = document.getElementById("calculate-button");

  function generateTable() {
    const rows = parseInt(rowcount.value);
    if (rows < 1 || rows > 20) {
      alert("Please enter a number between 1 and 20");
      return;
    }
    
    let html = `
    <table class="table table-bordered table-input">
      <thead>
        <tr>
          ${selectedDataType === 'discrete' ? '<th>X</th><th>f</th>' : '<th>Class Interval</th><th>f</th>'}
        </tr>
      </thead>
      <tbody id="tableBody">
        ${Array.from({ length: rows }).map(() => `
          <tr>
            ${
              selectedDataType === 'discrete'
                ? '<td><input type="number"></td><td><input type="number"></td>'
                : '<td><input placeholder="e.g: 10-20"></td><td><input type="number"></td>'
            }
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
    inputTable.innerHTML = html;
    inputTable.classList.remove("hidden");
    calculateButton.classList.remove("hidden");
  }
  
  // Add event listeners for table generation
  generateButton.addEventListener('click', generateTable);
  rowcount.addEventListener('change', generateTable);
});