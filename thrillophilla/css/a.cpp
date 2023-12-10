#include <iostream>
#include<string>
using namespace std;
class Book{
    private:
    string title;
    string auther;
    int isbn;
    string available;
    public:
    void setTitle(string s){

    }
    void setAuthor(string s){
        title=s;
    }
    void setISBN(int a){
        isbn=a;
    }
    void setAvailable(string s){
        available =s;
    }
    void getTitle(string s);
    void getAuthor(string s);
    void getISBN(int a);
    void getAvailable(string s);
    void borrowBook(string a);
   void returnBook(string s);

};
int main(){
    string p,q,r;
    int t;
    Book student[100];
    int m;
    cout<<"Menu:"<<endl;
    cout<<"1. Add book"<<endl;
    cout<<"2. Remove book"<<endl;
    cout<<"3. Search for book"<<endl;
    cout<<"4. Exit"<<endl;
    cout<<"Enter choice code"<<endl;
    cin>>m;
    for(int i=0;i<100;i++){
    if(m == 1){
        cout<<"Enter book name: "<<endl;
        cin>>p;
        cout<<"Enter author name : "<<endl;
        cin>>q;
        cout<<"Enter the ISBN code : "<<endl;
        cin>>t;
        student[i].setTitle(p);
        student[i].setAuthor(q);
        student[i].setISBN(t);
    }
    else if(m==2){

    } 
    }



  return 0;
}
