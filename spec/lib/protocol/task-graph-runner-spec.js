// Copyright 2014, Renasar Technologies Inc.
/* jshint node:true */

'use strict';

describe("TaskGraph Runner protocol functions", function () {
    helper.before();

    before(function () {
        this.taskgraphrunner = helper.injector.get('Protocol.TaskGraphRunner');
        //this.task = helper.injector.get('Protocol.Task');
    });

    helper.after();

    describe("getTaskGraphLibrary", function() {

        var testSubscription;
        afterEach("getTaskGraphLibrary afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive getTaskGraphLibrary results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetTaskGraphLibrary(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getTaskGraphLibrary(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getTaskGraphLibrary results without a filter", function() {
            var self = this,
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetTaskGraphLibrary(function(filter) {
                expect(filter).to.be.undefined;
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getTaskGraphLibrary();
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getTaskGraphLibrary failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeGetTaskGraphLibrary(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.getTaskGraphLibrary(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("getTaskLibrary", function() {

        var testSubscription;
        afterEach("getTaskLibrary afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive getTaskLibrary results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetTaskLibrary(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getTaskLibrary(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getTaskLibrary results without a filter", function() {
            var self = this,
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetTaskLibrary(function(filter) {
                expect(filter).to.be.undefined;
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getTaskLibrary();
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getTaskGraphLibrary failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeGetTaskLibrary(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.getTaskLibrary(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("getActiveTaskGraph", function() {

        var testSubscription;
        afterEach("getActiveTaskGraph afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive getActiveTaskGraph results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetActiveTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getActiveTaskGraph(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getActiveTaskGraph results without a filter", function() {
            var self = this,
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetActiveTaskGraph(function(filter) {
                expect(filter).to.be.undefined;
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getActiveTaskGraph();
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getActiveTaskGraph failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeGetActiveTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.getActiveTaskGraph(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("getActiveTaskGraphs", function() {

        var testSubscription;
        afterEach("getActiveTaskGraphs afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive getActiveTaskGraphs results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetActiveTaskGraphs(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getActiveTaskGraphs(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getActiveTaskGraphs results without a filter", function() {
            var self = this,
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeGetActiveTaskGraphs(function(filter) {
                expect(filter).to.be.undefined;
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.getActiveTaskGraphs();
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive getActiveTaskGraphs failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeGetActiveTaskGraphs(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.getActiveTaskGraphs(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("defineTaskGraph", function() {

        var testSubscription;
        afterEach("defineTaskGraph afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive defineTaskGraph results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeDefineTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.defineTaskGraph(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive defineTaskGraph results without a filter", function() {
            var self = this,
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeDefineTaskGraph(function(filter) {
                expect(filter).to.be.undefined;
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.defineTaskGraph();
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive defineTaskGraph failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeDefineTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.defineTaskGraph(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("defineTask", function() {

        var testSubscription;
        afterEach("defineTask afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive defineTask results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeDefineTask(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.defineTask(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive defineTask results without a filter", function() {
            var self = this,
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeDefineTask(function(filter) {
                expect(filter).to.be.undefined;
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.defineTask();
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive defineTask failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeDefineTask(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.defineTask(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("runTaskGraph", function() {

        var testSubscription;
        afterEach("runTaskGraph afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive runTaskGraph results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeRunTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.runTaskGraph(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive runTaskGraph results without a filter", function() {
            var self = this,
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeRunTaskGraph(function(filter) {
                expect(filter).to.be.undefined;
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.runTaskGraph();
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive runTaskGraph failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeRunTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.runTaskGraph(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("cancelTaskGraph", function() {

        var testSubscription;
        afterEach("cancelTaskGraph afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive cancelTaskGraph results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeCancelTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.cancelTaskGraph(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive cancelTaskGraph failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeCancelTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.cancelTaskGraph(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("pauseTaskGraph", function() {

        var testSubscription;
        afterEach("pauseTaskGraph afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive pauseTaskGraph results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribePauseTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.pauseTaskGraph(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive pauseTaskGraph failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribePauseTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.pauseTaskGraph(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

    describe("resumeTaskGraph", function() {

        var testSubscription;
        afterEach("resumeTaskGraph afterEach", function() {
            // unsubscribe to clean up after ourselves
            if (testSubscription) {
                return testSubscription.dispose();
            }
        });

        it("should subscribe and receive resumeTaskGraph results", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                testData = { abc: '123' };

            return self.taskgraphrunner.subscribeResumeTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                return testData;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;

                testSubscription = subscription;
                return self.taskgraphrunner.resumeTaskGraph(testFilter);
            }).then(function(data) {
                expect(data).to.deep.equal(testData);

            }).then(function() {
                // unsubscribe to clean up after ourselves
                return testSubscription.dispose();
            }).then(function(resolvedUnsubscribe) {
                // verify we unsubscribed correctly
                expect(resolvedUnsubscribe).to.be.ok;
            });
        });

        it("should subscribe and receive resumeTaskGraph failures", function() {
            var self = this,
                testFilter = { foo: 'bar'},
                sampleError = new Error('someError');

            var ErrorEvent = helper.injector.get('ErrorEvent');

            return self.taskgraphrunner.subscribeResumeTaskGraph(function(filter) {
                expect(filter).to.deep.equal(testFilter);
                throw sampleError;
            }).then(function(subscription) {
                expect(subscription).to.be.ok;
                testSubscription = subscription;

                return self.taskgraphrunner.resumeTaskGraph(testFilter);
            }).should.be.rejectedWith(ErrorEvent, 'someError')
                .then(function() {
                    // unsubscribe to clean up after ourselves
                    return testSubscription.dispose();
                }).then(function(resolvedUnsubscribe) {
                    // verify we unsubscribed correctly
                    expect(resolvedUnsubscribe).to.be.ok;
                });
        });
    });

});
