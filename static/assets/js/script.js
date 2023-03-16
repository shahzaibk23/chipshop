document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });



  function addCakeLayer(name, desc){
    var cakeSection = document.getElementById("messages");
    var elementString = `<div id="${name}" class="project-box-wrapper" style="width: 95%; margin-left: 2.5%;">
    <div class="project-box row d-flex align-items-center"  style="padding-top: 25px;padding-left: 25px;" >
        <div class="col-md-3"  style="text-align: center; margin-bottom: 15px; ">
            <input type="number" disabled min="1" value="1" class="days-left" style="width: 100%;height: 100%;font-size: 22px;" >
          </div>
      <!-- <div class="col-md-2"></div> -->
  <div class="project-box-content-header col-md-6 d-flex align-items-center" style="text-align: start">
    <div>
      <p class="box-content-header">${name}</p>
      <p class="box-content-subheader">${desc}</p>
    </div>
    
  </div>
  <div class="col-md-3 d-flex justify-content-end align-items-center">
    <button class="add-participant" style="margin-bottom: 16px;" onclick=removeCakeLayer('${name}')>
      <i class="fas fa-minus"></i>
    </button>
    
  </div>
  <!-- <div class="box-progress-wrapper">
    <p class="box-progress-header">Progress</p>
    <div class="box-progress-bar">
      <span class="box-progress" style="width: 60%; background-color: #ff942e"></span>
    </div>
    <p class="box-progress-percentage">60%</p>
  </div> -->
  
  
    
  </div>
</div>`;

    // check if div of id name doesn't exist in cakeSection div
    if(!document.getElementById(name)){
      cakeSection.innerHTML += elementString;
      document.getElementById(`cake_${name}`).style.display = "none";
      updateCakeList();
    }

  }

  function removeCakeLayer(name){
    var cakeSection = document.getElementById("messages");
    var element = document.getElementById(name);
    cakeSection.removeChild(element);
    document.getElementById(`cake_${name}`).style.display = "block";
    updateCakeList();

  }

  function updateCakeList(){
    var cakeSection = document.getElementById("cake_configs");
    var cakes = cakeSection.childElementCount;
    var selectedCakes = document.getElementById("messages").childElementCount;
    var remains = cakes - document.getElementById("messages").childElementCount;
    document.getElementById("remaining_cake_length").innerHTML = remains;
    document.getElementById("selected_cake_length").innerHTML = selectedCakes;
  }