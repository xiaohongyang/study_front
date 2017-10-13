import csv,os,sys

f ="zz.csv"

if os.path.isfile('zz.csv'):
    with open("zz.csv","r") as csvfile:
        reader = csv.reader(csvfile)
        #这里不需要readlines
         
        for line in reader:
            print( line )
             

