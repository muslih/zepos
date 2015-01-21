<?php include 'config/sambung.php' ?>


<pre>
<?php 
    $user = User::all();
    print_r($user);
?>
</pre>