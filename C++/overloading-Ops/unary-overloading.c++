#include <iostream>
#include <unistd.h>
#include <ctype.h>
#include <string.h>

using namespace std;

class String {
    private:

    public:
        int length;
        char value[25];

        String() {
            cout << "default" << endl;
        }

        String(char inputVal[]) {
            cout << "Constructor Invoked" << endl;
            strcpy(this->value, inputVal);
            this->length = strlen(value);
        }

        ~String() {
            cout << "Destructured" << endl;
        }

        void display() {
            cout << "The string is \"" << this->value << "\"" << endl;
            cout << "length is " << this->length << " characters." << endl;
        }

        string returnVal() {
            return this->value;
        }

        int returnLen() {
            return this->length;
        }

        String& operator ++ () {
            for (int i = 0; i < this->length; i++)
            {
                this->value[i] = toupper(this->value[i]);
            }
            return *this;
        }
};

int main() {
    char inputVal[25];
    cout << "initial value: ";
    cin >> inputVal;
    sleep(1);
    String s1(inputVal);
    ++s1;
    sleep(1);
    s1.display();
    sleep(1);
    return 0;
}