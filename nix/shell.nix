with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "env";
  buildInputs = [
    nodePackages.pnpm
    postman
  ];
}