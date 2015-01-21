<?php 
// ob_start();
// session_start();
 ?>
<!DOCTYPE html>
<html lang="en">
<?php 
// panggil fungsi
include('config/functions.php');
include('view/partials/header.php'); 
konek();
?>
<?php 
if(isset($_GET['permintaan']) && $_GET['permintaan'] == 'cetak_resi'){
    include 'view/page/mesin/cetak_resi.php';
}else{
?>

<body>
    <div id="wrapper">
        <!-- halaman login -->
        
        <!-- halaman dash -->
        <!-- Navigation -->
        <?php 
        // if (isset($_SESSION['user'])){ 
        //     include 'view/partials/nav.php';
            include 'view/partials/section.php';
        // }else{
        //     include 'view/login.php';
        // }
        ?>
        <?php 
        // if (isset($_GET['aksi'])){
        //     if ($_GET['aksi'] == 'keluar') {
        //         // remove all session variables
        //         session_unset(); 
        //         // destroy the session 
        //         session_destroy();
        //         reload();
        //     }
        // } 
        ?>
        <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->

    <!-- jQuery Version 1.11.0 -->
    <script src="./public/js/jquery-1.11.0.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="./public/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="./public/js/plugins/metisMenu/metisMenu.js"></script>

<? 
//kalo request permintaan tidak ada 
}
?>
    
    <!-- Morris Charts JavaScript -->
    <script src="./public/js/plugins/morris/raphael.min.js"></script>
    <script src="./public/js/plugins/morris/morris.min.js"></script>
    <script src="./public/js/plugins/morris/morris-data.js"></script>   
    <script src="./public/js/plugins/dataTables/jquery.dataTables.js"></script>
    <script src="./public/js/plugins/dataTables/dataTables.bootstrap.js"></script>
    <!-- Custom Theme JavaScript -->
    <script src="./public/js/sb-admin-2.js"></script>
    <script src="./public/js/script.js"></script>
    

</body>

</html>