var FoodLogger = Ember.Application.create();

FoodLogger.ApplicationController = Ember.Controller.extend();

FoodLogger.foods = Ember.Object.create({
    "foods": Ember.A([""])
});

FoodLogger.IndexController = Ember.ObjectController.extend({
  new: function() {
   FoodLogger.foods.foods.pushObject(this.get("newFoodName"))
   console.log(FoodLogger.foods.foods); 
  },
  newFoodName: ""
});

FoodLogger.initialize();