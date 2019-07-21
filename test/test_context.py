#!/usr/bin/env Python
# coding=utf-8

import unittest
import os
import json
import logging


class ContextTest(unittest.TestCase):
    context = {"name": "world"}

    def setUp(self):
        if os.environ.has_key("CONSOLE_LOG_API_CONTEXT"):
          self.context  = os.environ["CONSOLE_LOG_API_CONTEXT"]

    def test_process_context(self):
        logging.info(self.context)


if __name__ == '__main__':
    unittest.main(verbosity=3)
