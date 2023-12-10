#include <iostream>
using namespace std;

int main(){
    int n ,a ,b ,c ,;
    cout << "Enter the Amount "  <<endl;
    cin >> n;

    while (n>100)
    {
        int x = n/100;
        cout << "Number of 100 rupee note is "<< x;
        a = n-(x*100);
    }

    while (a>50 && a<100)
    {
        int y = a/50;
        cout <<"Number of 50 rupee note is" << y;
        b = a-(y*50);
    }

    while (b>20 && b<50)
    {
        int z = b/20;
        cout <<  "NUmber of 20 rupee note is " << z;
        c = b-(z*20);
    }

    cout << "Number of 1 rupee note is " <<c;
    
    return 0;
    
    
}