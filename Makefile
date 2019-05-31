BACKSTOP_BASE := ./tests/backstop
# ------------------------------------------------------------------------------
 
# NOTES:
# This Makefile assumes you've gone through the README steps in tests/backstop
# This Makefile is also only for running references and tests against the same environment
# Use the setup in tests/backstop to compare different environments
 
reference:
	backstop reference --configPath=backstop.js --pathFile=paths
 
test:
	backstop test --configPath=backstop.js --pathFile=paths
 
report:
	backstop openReport --configPath=backstop.js
