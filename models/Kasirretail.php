<?php 
class Kasirretail extends Activerecord\Model{

  public static $table_name = 'kasirretail';

  static $has_many = array(
     array('kasir_retail_detail')
  );  

  static $belongs_to = array(
	array('user'),
  array('toko')
  );

  public function before_create(){
    $this->tgl_penjualan = Date('d-m-Y H:i:s', strtotime('now'));
  } 
  
  // buat trigger kurangi stok barang
  static $after_create = array(
    'update_relasi_data'
  );

  
  // update status jadi 1 artinya transaksi di proses
  public function update_relasi_data(){
    foreach ($this->kasir_retail_detail as $dat) {
      $dat->update_attributes(array('status'=> '1'));
      // update stok otomatis ketika transaksi di proses

      // jumlah barang yang dibeli
      $qty = $dat->qty;

      // jumlah stok yang ada 
      $qty_stok = $dat->stok->stok;

      // sisa setelah update
      $sisa_stok = $qty_stok-$qty;

      $dat->stok->update_attributes(array('stok'=> $sisa_stok));
    }
  }
}
