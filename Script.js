//����� emeil � ������� ����������� ���������.
var str = 'realyscript@gmail.com mail adress';
re = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
found = str.match(re);
console.log(found);


//����� ���������
function fibonacci(n) {   
    if (n < 2) {
        if (n == 0) {
            return 0;
        }
        return 1; 
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
 
for (n = 0; n <= 28; n++) {
    console.log(fibonacci(n));
}


