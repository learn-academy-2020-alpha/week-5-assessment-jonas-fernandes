# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

> rails new 'app_name' -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - ask router to match request to a controller action
library - 
:id - param called id
book - controller name where request is dispatched to
show - action "show" or display to be performed by the controller. 

I missed this class. Need to review it more.

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

Destroy the model that was supposed to hold the foreign key and create a new one model with the foreign
key. This actually happened to my pair in one of the challenges and after struggling to add it for a couple
of days, we decided to delete it and start all over again. 



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

> rails generate model Person shirt:string, pants:string, shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

class Person < ApplicationRecord
  validates :shirt, :pants, :shoes, presence: true
end