#include <iostream>
using namespace std;

int main() {
    int wallet;
    cout << "aaj kitne paise hai mere pass????" << endl;
    cin >> wallet;
    if(wallet<50){
        cout << "bhai almeida hi chalte hai\ngareebi peak pe hai" << endl;
    } else if(wallet<500) {
        cout << "lets go apni duniya and have tea there!!!" << endl;
    } else {
        cout << "Candies jaa ke aate hai\nit'll be better to go someplace nice for once" << endl;
    }
    return 0;
}