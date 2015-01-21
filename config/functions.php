<?php 

function konek(){
	include("config/sambung.php");
}

function level($lev){
	if ($lev == 1) {
		echo "Admin";
	} else if($lev == 2){
		echo "Manager";
	}else if($lev == 3){
		echo "Gudang";
	}else if($lev == 4){
		echo "Kasir";
	}else{
		echo "undefined";
	}
	
}

// enkrip password
function sandi($pass){
	return password_hash($pass, PASSWORD_DEFAULT);
}

function ceksandi($pass, $hash){
	if (password_verify($pass, $hash)) {
	    return true;
	} else {
	    return false;
	}
}

function reload(){
	header('Location: http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF']);
}


// dekrip password

// fungsi status toko
function statusToko($bol){
	if ($bol == 0) {
		print("Pusat");
	} else  {
		print("Cabang");
	}
}

function flash($method,$message){
	echo "
	<div class=\"alert alert-$method alert-dismissible\" role=\"alert\">
	  <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>
	  $message
	</div>
	";
}

function hapus($id){
	echo "
	<form action=\"\" method=\"POST\">
		<input type=\"hidden\" name=\"id\" value=$id>
		<button name=\"method\" rel=\"tooltip\" data-placement=\"top\" data-original-title=\"Hapus data\" value=\"delete\" class=\"btn btn-danger btn-xs\" onclick='return confirm(\"anda yakin menghapus? \")'>
			<i class=\"glyphicon glyphicon-trash\"></i>
		</button>
	</form>
	";
}

function no_faktur(){
	if (isset($_SESSION['no_faktur'])){
		$no_faktur = $_SESSION['no_faktur'];
		echo $no_faktur;
	}else{
		$date=date('ymd');
		// contoh id toko
		$kd_toko = $_SESSION['toko'];
		$user = $_SESSION['user'];

		// deklarasi tanggal hari ini
		$today = Date('Y-m-d', strtotime('now'));

        // $today = Stok::all(array('conditions' => array('toko_id =?', $_SESSION['toko']))); 

        // deklarasi variable jumlah penjualan berdasarkan user hari ini 
        $jumlah = Kasirretail::count(array('conditions' => array('tgl_penjualan =? AND user_id =?',$today,$_SESSION['user'])));


		// jumlah pembelian hari ini berdasarkan user


		// jumlah pembelian hari ini
		// $no_urut=substr($maxid,-5);
		// tambah satu
		// $new_urut=$no_urut+1;
		// $no_faktur=$kd_toko.$date.sprintf("%05s",$new_urut);

		$no_faktur="0".$user.$kd_toko.$date.$jumlah+1;
		$_SESSION['no_faktur'] = $no_faktur;
		echo $no_faktur;
	}
}

function no_faktur_grosir(){
	if (isset($_SESSION['no_faktur_grosir'])){
		$no_faktur_grosir = $_SESSION['no_faktur_grosir'];
		echo $no_faktur_grosir;
	}else{
		$date=date('ymd');
		// contoh id toko
		$kd_toko = $_SESSION['toko'];
		$user = $_SESSION['user'];

		// deklarasi tanggal hari ini
		$today = Date('Y-m-d', strtotime('now'));

        // $today = Stok::all(array('conditions' => array('toko_id =?', $_SESSION['toko']))); 

        // deklarasi variable jumlah penjualan berdasarkan user hari ini 
        $jumlah = Kasirgrosir::count(array('conditions' => array('tgl_penjualan =? AND user_id =?',$today,$_SESSION['user'])));


		// jumlah pembelian hari ini berdasarkan user


		// jumlah pembelian hari ini
		// $no_urut=substr($maxid,-5);
		// tambah satu
		// $new_urut=$no_urut+1;
		// $no_faktur=$kd_toko.$date.sprintf("%05s",$new_urut);

		$no_faktur_grosir="1".$user.$kd_toko.$date.$jumlah+1;
		$_SESSION['no_faktur_grosir'] = $no_faktur_grosir;
		echo $no_faktur_grosir;
	}
}

// crud view
function viewTemplate($table){

}

// keranjang belanja
function potonganPersen($persen,$subtotal){
	$potongan = (intval($persen) /100)*intval($subtotal);
	return $potongan;
}

function total($potongan_persen, $diskon_rupiah, $subtotal){
	$total = (intval($subtotal)-intval($potongan_persen))-intval($diskon_rupiah);
	return $total;
}

function kembalian($bayar, $total){
	$kembalian = intval($bayar) - intval($total);
	return $kembalian;
}

function jatuh_tempo($tgl) {
	// $sekarang = strtotime('now');
	$sekarang=strtotime('now');
	$jatuh_tempo=strtotime($tgl->format('d-m-Y'));

	// kalo expired
	if($sekarang > $jatuh_tempo)
	{
	    echo '<div class="btn btn-danger btn-xs">jatuh tempo</div>';
	}
}

// migrasi ke json
function arToJson($data, $options = null) {
	$out = "[";
	foreach( $data as $row) { 
	if ($options != null)
	$out .= $row->to_json($options);
	else 
	$out .= $row->to_json();
	$out .= ",";
	}
	$out = rtrim($out, ',');
	$out .= "]";
	return $out;
}