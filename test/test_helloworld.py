import unittest


class TestHelloWorld(unittest.TestCase):
    def test_hello(self):
        assert 'hello, world.'


if __name__ == '__main__':
    unittest.main()
