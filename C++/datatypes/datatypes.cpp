#include <iostream>
using namespace std;

int main() {
    int a; //variable declarion
    a = 12; /*variable initailisation*/
    cout << "size of int a = " << sizeof(a) <<" bytes" << endl;

    float b;
    cout << "size of float b = " << sizeof(b) <<" bytes" << endl;

    char c;
    cout << "size of char c = " << sizeof(c) <<" bytes" << endl;

    bool d;
    cout << "size of bool d = " << sizeof(d) <<" bytes" << endl;

    short int si;
    cout << "size of short int si = " << sizeof(si) <<" bytes" << endl;
    
    long long li;
    cout << "size of long int li = " << sizeof(li) <<" bytes" << endl;

    return 0;
}