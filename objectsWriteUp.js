/* A brief overview of Javascript OOP */

// ES5
/* ---------------------------------- Object Literals ----------------------------*/
const obj = {
  key1: 'value',
  key2: function myFunction() {
    //code
  },
};

/* obj Chrome console view

  {
    key1:      'value'
    key2:       myFunction()
    __proto__:  Object
      ->...
  }

 - OL's are singletons so each is a single instance. 
 - They inherit the Object prototypes. 
 - They only exist in the context of the scope in which they are declared.
 - Has no closure so all variables are public. 
*/

/* ---------------------------------- Constructor Functions ----------------------------*/
function ConsObj() {
  this.key1 = 'value';
  this.key2 = function myFunction() {
    //code
  };
}

ConsObj.prototype.myFunction2 = function myFunction2() {
  //code
};

const obj2 = new ConsObj();

/* obj2 Chrome console view:

  ConsObj{
    key1:       'value'
    key2:       myFunction()
    __proto__:  Object
      -> myFunction2:   myFunction2()
      -> constructor:   ConsObj()
      -> __proto__:     Object
          ->...
  }

 - CF's can be used to create multiple instances of an object.
 - The instances inherit the prototypes from the CF & from Object
 - The CF exists globally though instances will exist the same way as OL's (not including prototypes).
 - Has a closure and can store both public and private variables. 
*/

/* ---------------------------------- Object.create() ----------------------------*/
const inheritedPrototypes = {
  key1: 'value',
  key2: function myFunction() {
    //code
  },
};

const obj3 = Object.create(inheritedPrototypes, {
  key3: { value: 'value' },
});

/* obj3 Chrome console view

  {
    key3:      'value'
    __proto__: Object
      -> key1:      'value'
      -> key2:      myFunction()
      -> __proto__: Object
          ->...
  }

 - O.c() can be used to create multiple objects with the same prototypes.
 - Can be used to create an object with NO prototypes using Object.create(null).
 - Each created instance is a singleton but can inherit global prototypes.
 - Can be used for both public and private variables if private vars are inherited from prototype object. 
*/

// ES2015
/* ---------------------------------- Classes ----------------------------*/
class ObjClass {
  constructor() {
    this.key1 = 'value';
    this.key2 = function myFunction() {
      //code
    };
  }
  myFunction2() {
    //code
  }
}

const obj4 = new ObjClass();

/* obj4 Chrome console view

  ObjClass{
    key1:       'value'
    key2:       myFunction()
    __proto__:  Object
      -> constructor: class ObjClass
      -> myFunction2: myFunction2()
      -> __proto__:   Object
          ->...
  }

 - Classes are 'convenience syntax' so there is no new functionality, just a nicer wrapper around ES5.
 - Can utilise the static keyword to use methods without creating an instance of the class. 
*/

/* ---------------------------------- Sub Classes----------------------------*/
class ObjClass2 extends ObjClass {
  constructor() {
    super();
    this.key3 = 'value';
    this.key4 = function myFunction3() {
      //code
    };
  }

  myFunction4() {
    //code
  }
}

const obj5 = new ObjClass2();

/* obj5 Chrome console view

  ObjClass2{
    key1:       'value'
    key2:       myFunction()
    key3:       'value'
    key4:       myFunction3()
    __proto__:  ObjClass
      -> constructor: class ObjClass2
      -> myFunction4: myFunction4()
      -> __proto__:   Object
        -> constructor: class ObjClass
        -> myFunction2: myFunction2()
        -> __proto__:   Object
            ->...
  }

 - Same as classes except with nested prototypes
*/
