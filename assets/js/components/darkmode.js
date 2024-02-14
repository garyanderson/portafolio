function malditoCheck(){
    let dark = document.getElementById('darkmode-toggle')
    let root = document.documentElement;
    if(dark.checked){
       root.style.setProperty("--primary-color", " #F2F2F2");
       root.style.setProperty("--text-primary", " #FFA000");
       root.style.setProperty("--bg-color-section1", " #CCCCCC");
       root.style.setProperty("--bg-color-section2", " #999999");
       root.style.setProperty("--bg-color-buttons", " #666666");
       root.style.setProperty("--color-white", "black");
       root.style.setProperty("--color-white-1", " #A4A4A4");
       root.style.setProperty("--color-white-2", " #303F9F");
       root.style.setProperty("--color-white-3", " #388E3C");
       root.style.setProperty("--color-black", "white")
       window.alert("modo oscuro")
    }else{
      root.style.setProperty("--primary-color", " #111");
      root.style.setProperty("--text-primary", " #EE991A");
      root.style.setProperty("--bg-color-section1", " #eee");
      root.style.setProperty("--bg-color-section2", " #FAFAFA");
      root.style.setProperty("--bg-color-buttons", " #E0E0E0");
      root.style.setProperty("--color-white", " #fff");
      root.style.setProperty("--color-white-1", " #EBEBEB");
      root.style.setProperty("--color-white-2", " #F0F0F0");
      root.style.setProperty("--color-white-3", " #ccc");
      root.style.setProperty("--color-black", " #000");
      window.alert("modo dia")
    }
  }