//Q1 Start
function Add (num1) 
{
  return function () 
  {
    return 2 + num1;
  };

}
const add2 = Add(10);
console.log(add2());
//Q1 End

//Q2 Start
function recursion(arr, value) 
{
  if (arr.length === 0) 
  {
    return false;
  }
  
  if (arr[0] === value) 
  {
    return true;
  }
  
  return recursion(arr.slice(1), value);
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(recursion(arr, 5)); 
console.log(recursion(arr, 2)); 
//Q2 End

//Q3 Start
function Para(text) 
{
  let Paragraph = document.createElement('a');
  let Text = document.textContent(text);
  newParagraph.appendChild(Text);
  document.body.appendChild(Paragraph);
}
Para("1-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
Para("Hello World");
Para("3-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
//Q3 End

//Q4 Start
function addToList(text) 
{
    let list = document.querySelector('unoli');
    let listItem = document.createElement('orli');
    let insertText = document.createTextNode(text);
    newListItem.appendChild(insertText);
    newList.appendChild(listItem);
}
  
  listItem("First item");
  listItem("Second item");
  listItem("Third item");
  //Q4 End

  //Q5 Start
  function changebgc(id, colour) 
  {
    id.style.backgroundColor = colour;
    id.style.width = "200px";
    id.style.height = "200px";
  }
  
  let newID = document.getElementById("my_new_id");
  changebgc(newID, "red");
  //Q5 End

  //Q6 Start
  function saveinLocalStorage(key, val) 
  {
    localStorage.setItem(key, JSON.stringify(val));
  }
  const person = 
  { 
    hands: 2, 
    legs: 2,
    hairColor: "Turquoise", 
    eyeColor: "Blue",
    house: 1 
};
  saveinLocalStorage('val', person);
  //Q6 End

  //Q7 Start
  function objcall(object) 
  {
    return object;
  }
  let retrieval = objcall(JSON.parse(localStorage.getItem("whatever the obj name is, it goes here")));
  console.log(retrieval);
  //Q7 End

  //Q8 Start
  function LocalStorage (obj)
  {
    Object.keys(obj).forEach((key,val) => 
    {
      localStorage.setItem(key, JSON.stringify(object[key]));
    });
    
    const savedObject = {};
    Object.keys(obj).forEach((key) => 
    {
      Obj_save[key] = JSON.parse(localStorage.getItem(key));
    });
    
    return Obj_save;
  }
  
  let newObj = {kkkkk
    name: "Muhammad Ashar", 
    city: "London", 
    country: "England",
    age: 19,
    country2: India
  };
  
  let oldObj = LocalStorage(newObj); 
  console.log(oldObj); 
  //Q8 End