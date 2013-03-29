#!/bin/sh

prove -fv --timer --trap run-normal.sh
prove -fv --timer --trap run-requirejs.sh
prove -fv --timer --trap --exe node --ext .js
