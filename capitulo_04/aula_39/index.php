<?php 

//memory limit php
ini_set('memory_limit', '512M');

require "classes.php";

$aluno = new Aluno("João", 16);
$aluno->exibir();