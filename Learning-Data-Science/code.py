# --------------
# Code starts here
class_1 =['Geoffrey Hinton','Andrew Ng','Sebastian Raschka','Yoshua Bengio']
class_2 =['Hilary Mason','Carla Gentry','Corinna Cortes']
new_class = class_1 + class_2
print(new_class)

print('='*50)
new_class.append('Peter Warden')
print(new_class)

print('='*50)

new_class.remove('Carla Gentry')
print(new_class)

# Code ends here


# --------------
# Code starts here
courses = {'Math' : 65,'English' : 70, 'History' : 80, 'French' : 70, 
'Science' : 60}

print(courses)

math = courses['Math']
english = courses['English']
history = courses['History']
french = courses['French']
science = courses['Science']
#total = courses['Math'] + courses['English'] + courses['History'] + courses['French'] + courses['Science']
total = math + english + history + french + science 
print(total)

percentage = (total * 100/ 500)
print(percentage)

 
# Code ends here


# --------------
# Code starts here
mathematics = {'Geoffrey Hinton' : 78, 'Andrew Ng' : 95,'Sebastian Raschka' : 65, 
'Yoshua Benjio' : 50, 'Hilary Mason' : 70, 'Corinna Cortes' : 66, 
'Peter Warden' : 75}

#Geoffrey = mathematics['Geoffrey Hinton']
#Andrew = mathematics['Andrew NG']
#Sebastian = mathematics['Sebastian Raschka']
#Yoshua = mathematics['Yoshua Benjio']
#Hilary = mathematics['Hilary Mason']
#Corinna = mathematics['Corinna Cortes']
#Peter = mathematics['Peter Warden']

max_marks_scored = mathematics['Geoffrey Hinton'],mathematics['Andrew Ng'],
mathematics['Sebastian Raschka'],mathematics['Yoshua Benjio'], mathematics['Hilary Mason'],
mathematics['Corinna Cortes'], mathematics['Peter Warden']

max_marks_scored = max(max_marks_scored)
print(max_marks_scored)

topper = max(mathematics,key = mathematics.get)
print(topper)

# Code ends here  


# --------------
# Given string
topper = "andrew ng"
first_name = topper[0:6]
print(first_name)
last_name = topper[7:9]
print(last_name)
full_name = last_name + ' ' + first_name 
print(full_name)
certificate_name = full_name.upper()
print(certificate_name)
#Split_name = 
#print(topper.split()[2])
#print(Split_name)
#first_name = Split_name[1]
#print(first_name)
# Code starts here



# Code ends here


