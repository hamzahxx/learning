#include <iostream>
using namespace std;

class Simple {
    int a;
    int b;
    public:
    void setVal(int v1, int v2) {
        a = v1;
        b = v2;
    }
    void printVal() {
        cout << "Your Values are " << a << " + " << b << "i" << endl;
    }
};

Simple sumSimple(Simple c1, Simple c2){
    Simple c3;
    c3.setVal((c1.a + c2.a), (c1.b + c2.b));
    return c3;
}

int main() {
    Simple data1, data2, data3;
    
    data1.setVal(1, 4);
    data1.printVal();

    data2.setVal(5, 8);
    data2.printVal();

    data3.setVal(sumSimple(data1, data2));
    return 0;
}