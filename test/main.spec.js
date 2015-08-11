describe("ContactService"  , function(){
  var contactService;
  beforeEach(function(){
    module("Contactical");
    inject(function(ContactService){
      contactService = ContactService;
    });
  });

  it("should have contacts as an array " , function(){
    expect(contactService.contacts).toEqual(jasmine.any(Array));
  });

  describe("get contact" , function(){
    var $httpBackend, contacts;
    beforeEach(inject(function($injector){
      $httpBackend = $injector.get("$httpBackend");
      $httpBackend.expectGET("http://localhost:9001/contacts")
        .respond(200 , [{name : 'a'} , {name : 'b'}]);
        contacts = contactService.contacts;
        contactService.get();
        $httpBackend.flush();
    }));
    it("should request for contacts" ,function(){
      expect(contactService.contacts.length).toEqual(2);
    });

    it("should keep contact in the original instance" , function(){
      expect(contactService.contacts).toBe(contacts);
    });
  });
});

describe("List Controller" , function(){
  beforeEach(module("Contactical"));
  it("call ContactService.get() and keep contact in $scope" , inject(function($controller , $injector , $rootScope){
    //Arrange
    var $scope = $rootScope.$new();
    var ContactService = $injector.get("ContactService");
    spyOn(ContactService , 'get');
    //Action
    $controller("ListContact", {$scope: $scope});
    //Assert
    expect(ContactService.get).toHaveBeenCalled();
    expect($scope.contacts).toBe(ContactService.contacts);
  }));
});
describe("Copitalize Filter "  , function(){
  var capitalize;
  beforeEach(module("Contactical"));
  beforeEach(inject(function($filter){
    capitalize = $filter("capitalize");
  }));

  it("Should uppercase the first letter of name " , inject(function($filter){
    // expect(capitalize).not.toBeUndefined();
    //var name = "Kotchaphan";
    expect(capitalize("kotchaphan")).toEqual("Kotchaphan");
  }));

  it("should uppercase the first letter of both firtname and lastname " , function(){
    expect(capitalize("kotchaphan muangsan")).toEqual("Kotchaphan Muangsan");
  });
});

describe("avatar directive " , function(){
  beforeEach(module("Contactical"));
  it("display the first letter in more as bold font" , inject(function($compile , $rootScope){
    $rootScope.contact = {
      name : "Kotchaphan Muangsan"
    };
    var element = $compile("<avatar name='contact.name' ></avatar>")($rootScope);
    $rootScope.$digest();
    //Assertion
    expect(element.html()).toEqual('<b class="ng-binding">K</b>');
  //element(element.text()).toEqual('K');
  }));
});
