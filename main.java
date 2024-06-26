public class Main
{
	public static void main(String[] args) {
	    
	    int a [] = { 157, 2, 10, 8, 90, 10, 20, 74, -52, 105 }; // n = 500

	    int n = 15;
	    
	    int flag = 0;
	    
	    for(int i =0 ; i<a.length; i++){
            
            if(a[i] == n){
    		    System.out.println(a[i]);
    		    flag = 1;
    		    break;
            }
	    }
	    
	    if(flag == 0){
	        System.out.println("Value is not Found");
	    }
	    
	}
}

