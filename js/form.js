class Form{
constructor(){
this.title = createElement("h2");
this.input = createInput("What is Type 1 Diabetes? Type 1 Diabetes is an autoimmune disease in which your pancreas do not produce insulin which is a hormone in your body which keeps the amount of sugar in your body under control. How do people control their sugar levels with Type 1 Diabetes?Research for Type 1 Diabetes has come a long way in the past few years, 5 years ago I was having to take 4 needles a day, 1 for each meal and one to last the entire day. Now I just have to insert a cannula (a very tiny tube that goes into your body) which gives insulin when you tell it to through an app and on its own. I also do not have to prick myself everyday to check my sugar, I have a 24/7 monitor on my body. What are all the objects in the game? Juice- The juice is used when your sugar goes low to bring it up as it is a fast acting sugary liquid.Candy- candy is also used for when your sugar goes low and it is used because it is filled with sugar. Certain candies are not used because they are slow acting as to some which are fast acting. Dextrose tablets - These are also used to bring sugar up when it is low as it is a tablet purely made of dextrose which is a simple sugar.Insulin bottle - Insulin is the best method of bringing your sugar down when it is high as it is the best at getting rid of excess sugar and controlling the sugar level, although too much can also result in a problem.");
this.button = createButton("game page");
}
input(){

}
hide(){
this.title.hide();
this.input.hide();
this.button.hide();
}
display(){
this.title.display(300,100);
this.input.display(250,300);
this.button.display(900,950);
}
}