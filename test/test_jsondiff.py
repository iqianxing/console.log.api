# -*- coding:utf-8 -*-
import unittest
import json


class TestDictCompare(unittest.TestCase):
    def test_json_same_keys(self):
        self.maxDiff = None
        oldJson = json.loads('{"hello":"world","success":true}')
        newJson = json.loads('{"hello":"world","success":true}')
        self.assertDictEqual(oldJson, newJson)

    def test_json_diff_keyOrders(self):
        self.maxDiff = None
        oldJson = json.loads('{"hello":"world","success":true}')
        newJson = json.loads('{"success":true,"hello":"world"}')
        self.assertDictEqual(oldJson, newJson)

    def test_json_diff_values(self):
        self.maxDiff = None
        oldJson = json.loads('{"hello":"world","success":true}')
        newJson = json.loads('{"success":true,"hello":"wOrld"}')
        self.assertDictEqual(oldJson, newJson)

    def test_json_diff_sub_nodes(self):
        self.maxDiff = None
        oldJson = json.loads(
            '{"user":{"name":"devops","age":10},"hello":"world","success":true}'
        )
        newJson = json.loads(
            '{"success":true,"hello":"world","user":{"name":"test","age":10}}')
        self.assertDictEqual(oldJson, newJson)

    def test_json_with_chinese(self):
        self.maxDiff = None
        oldJson = json.loads('{"hello":"你好","success":true}')
        newJson = json.loads('{"success":true,"hello":"你好吗"}')
        self.assertDictEqual(oldJson, newJson)

    def test_json_with_date(self):
        self.maxDiff = None
        oldJson = json.loads(
            '{"hello":"你好","success":true,"birthDay":"1995-06-15 10:05:00"}')
        newJson = json.loads(
            '{"success":true,"hello":"你好","birthDay":"1995-06-15 10:05:00"}')
        self.assertDictEqual(oldJson, newJson)


if __name__ == '__main__':
    unittest.main()
