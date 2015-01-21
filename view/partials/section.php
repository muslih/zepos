<div id="page-wrapper">
<?php 
if (isset($_GET["page"])) {
    // buat variable untuk method get
    $page = $_GET['page']; 
    // $page = basename($action);

    // cek apakah ada file yang dicari pada method yang ada
    if (file_exists("view/page/".$page."/index.php")) {

        // bila ada panggil
        include("view/page/".$page."/index.php");
    }else{
        // bila file tidak ditemukan panggil halaman error 404
        include("view/page/404.php");
    }
}else{
    include 'view/page/dash/index.php';
}
 ?>
</div>