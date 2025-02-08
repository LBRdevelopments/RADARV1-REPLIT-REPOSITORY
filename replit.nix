{ pkgs }:

pkgs.mkShell rec {
  buildInputs = [ pkgs.git pkgs.nodejs ];
}
