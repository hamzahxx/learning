#include <iostream>
using namespace std;

class Complex
{
private:
    string data;

public:
    Complex(){};

    Complex(string inputVal) {
        this->data = inputVal;
    }
    ~Complex() {}

    Complex operator+ (Complex c) {
        Complex temp;
        temp.data = this->data + " " + c.data ;
        return temp;
    }

    void display() {
        cout << this->data << endl;
    }
};

int main() {
    Complex c1("Hello,");
    Complex c2("World!");
    Complex c3 = c1 + c2;

    c1.display();
    c2.display();
    c3.display();
}