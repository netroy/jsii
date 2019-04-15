package software.amazon.jsii.tests.calculator.lib;

/**
 * Interface that inherits from packages 2 levels up the tree.
 * 
 * Their presence validates that .NET/Java/jsii-reflect can track all fields
 * far enough up the tree.
 */
@javax.annotation.Generated(value = "jsii-pacmak")
public interface IThreeLevelsInterface extends software.amazon.jsii.JsiiSerializable, software.amazon.jsii.tests.calculator.base.IBaseInterface {
    void baz();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements software.amazon.jsii.tests.calculator.lib.IThreeLevelsInterface {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
        }

        @Override
        public void baz() {
            this.jsiiCall("baz", Void.class);
        }

        @Override
        public void bar() {
            this.jsiiCall("bar", Void.class);
        }

        @Override
        public void foo() {
            this.jsiiCall("foo", Void.class);
        }
    }
}
