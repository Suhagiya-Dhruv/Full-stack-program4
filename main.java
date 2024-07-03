import java.util.*;

public class Main
{
	public static void main(String[] args) {
		
    // factor count

    Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int factor = 2;
		
		for(int i=2;i<=a/2;i++){
		    if(a%i == 0){
		        factor++;
		    }
		}
		
    if(factor == 2){
      System.out.println("Prime Number");
    }else{
      System.out.println("Not Prime Number");
    }
		
	}
}



import java.util.*;

public class Main
{
	public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		int a = 0;
		int b = 1;

    System.out.print(a + " ");
    System.out.print(b + " ");

  	int c = 0;

		for(int i=0;c<num;i++){
		   c = a+b;
       a = b;
       b = c;
       if(c > num){
        break;
       }
       System.out.print(c + " ");
		}
		
	}
}